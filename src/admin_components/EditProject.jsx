import React, { useEffect, useState } from "react";
import { API_URL } from "../config";

const Edit_Project = ({ project, setSection }) => {
    const [formData, setFormData] = useState({
        title: "",
        role: "",
        overview: "",
        problem: "",
        solution: "",
        stack: "",
        features: "",
        challenges: "",
        learned: "",
        github: "",
        live: "",
        completed: "",
        featured: false,
    });

    // Existing thumbnail from database
    const [existingThumbnail, setExistingThumbnail] = useState(null);

    // New thumbnail selected by user
    const [newThumbnail, setNewThumbnail] = useState(null);

    // Preview for new thumbnail
    const [thumbnailPreview, setThumbnailPreview] = useState(null);

    // Existing images/videos from database
    const [existingImages, setExistingImages] = useState([]);

    // New images/videos selected by user
    const [newImages, setNewImages] = useState([]);

    // Preview URLs for new images/videos
    const [newImagePreviews, setNewImagePreviews] = useState([]);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    // =========================================================
    // LOAD PROJECT DATA
    // =========================================================

    useEffect(() => {
        if (!project) return;

        setFormData({
            title: project.title || "",
            role: project.role || "",
            overview: project.overview || "",
            problem: project.problem || "",
            solution: project.solution || "",

            stack: Array.isArray(project.stack)
                ? project.stack.join(", ")
                : project.stack || "",

            features: Array.isArray(project.features)
                ? project.features.join(", ")
                : project.features || "",

            challenges: Array.isArray(project.challenges)
                ? project.challenges.join(", ")
                : project.challenges || "",

            learned: Array.isArray(project.learned)
                ? project.learned.join(", ")
                : project.learned || "",

            github: project.github || "",
            live: project.live || "",
            completed: project.completed || "",
            featured: project.featured || false,
        });

        setExistingThumbnail(project.thumbnail || null);

        setExistingImages(
            Array.isArray(project.images)
                ? project.images
                : []
        );

    }, [project]);

    // =========================================================
    // HANDLE TEXT INPUT
    // =========================================================

    const handleChange = (e) => {
        const {
            name,
            value,
            type,
            checked
        } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // =========================================================
    // THUMBNAIL
    // =========================================================

    const handleThumbnail = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (thumbnailPreview) {
            URL.revokeObjectURL(thumbnailPreview);
        }

        setNewThumbnail(file);

        const previewUrl = URL.createObjectURL(file);

        setThumbnailPreview(previewUrl);
    };

    // =========================================================
    // REMOVE NEW THUMBNAIL
    // =========================================================

    const removeNewThumbnail = () => {
        if (thumbnailPreview) {
            URL.revokeObjectURL(thumbnailPreview);
        }

        setNewThumbnail(null);
        setThumbnailPreview(null);
    };

    // =========================================================
    // REMOVE EXISTING THUMBNAIL
    // =========================================================

    const removeExistingThumbnail = () => {
        setExistingThumbnail(null);
    };

    // =========================================================
    // HANDLE NEW IMAGES / VIDEOS
    // =========================================================

    const handleImages = (e) => {
        const files = Array.from(e.target.files);

        if (!files.length) return;

        setNewImages((prev) => [
            ...prev,
            ...files
        ]);

        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
            type: file.type.startsWith("video")
                ? "video"
                : "image",
        }));

        setNewImagePreviews((prev) => [
            ...prev,
            ...previews
        ]);

        e.target.value = "";
    };

    // =========================================================
    // REMOVE NEW IMAGE / VIDEO
    // =========================================================

    const removeNewImage = (index) => {
        const preview = newImagePreviews[index];

        if (preview?.url) {
            URL.revokeObjectURL(preview.url);
        }

        setNewImages((prev) =>
            prev.filter((_, i) => i !== index)
        );

        setNewImagePreviews((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // =========================================================
    // REMOVE EXISTING IMAGE / VIDEO
    // =========================================================

    const removeExistingImage = (index) => {
        setExistingImages((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // =========================================================
    // CONVERT COMMA STRING TO ARRAY
    // =========================================================

    const convertToArray = (value) => {
        return value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
    };

    // =========================================================
    // SUBMIT
    // =========================================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!project?._id) {
            setMessage("Project ID is missing");
            setMessageType("error");
            return;
        }

        setLoading(true);
        setMessage("");
        setMessageType("");

        try {
            const data = new FormData();

            // Basic information
            data.append("title", formData.title);
            data.append("role", formData.role);
            data.append("overview", formData.overview);

            // Project explanation
            data.append("problem", formData.problem);
            data.append("solution", formData.solution);

            // Arrays
            data.append(
                "stack",
                JSON.stringify(
                    convertToArray(formData.stack)
                )
            );

            data.append(
                "features",
                JSON.stringify(
                    convertToArray(formData.features)
                )
            );

            data.append(
                "challenges",
                JSON.stringify(
                    convertToArray(formData.challenges)
                )
            );

            data.append(
                "learned",
                JSON.stringify(
                    convertToArray(formData.learned)
                )
            );

            // Links
            data.append("github", formData.github);
            data.append("live", formData.live);
            data.append("completed", formData.completed);

            // Featured
            data.append("featured", formData.featured);

            // Existing thumbnail
            data.append(
                "existingThumbnail",
                existingThumbnail || ""
            );

            // New thumbnail
            if (newThumbnail) {
                data.append("thumbnail", newThumbnail);
            }

            // Existing images
            data.append(
                "existingImages",
                JSON.stringify(existingImages)
            );

            // New images/videos
            newImages.forEach((image) => {
                data.append("images", image);
            });

            // API request
            const response = await fetch(
                `${API_URL}/projects/${project._id}`,
                {
                    method: "PUT",
                    body: data,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to update project"
                );
            }

            setMessage(
                "Project updated successfully 🎉"
            );

            setMessageType("success");

            console.log(
                "Updated project:",
                result
            );

            // Cleanup preview URLs
            newImagePreviews.forEach((preview) => {
                URL.revokeObjectURL(preview.url);
            });

            if (thumbnailPreview) {
                URL.revokeObjectURL(thumbnailPreview);
            }

            // Clear new media
            setNewImages([]);
            setNewImagePreviews([]);

            setNewThumbnail(null);
            setThumbnailPreview(null);

            // Go back to projects
            setTimeout(() => {
                setSection("project");
            }, 1200);

        } catch (error) {
            console.error(
                "Update project error:",
                error
            );

            setMessage(
                error.message ||
                "Something went wrong"
            );

            setMessageType("error");

        } finally {
            setLoading(false);
        }
    };

    // =========================================================
    // NO PROJECT
    // =========================================================

    if (!project) {
        return (
            <div className="text-white p-5">

                <p>
                    No project selected.
                </p>

                <button
                    onClick={() => setSection("project")}
                    className="mt-4 bg-[#3B82F6] px-4 py-2 rounded-lg"
                >
                    Back to Projects
                </button>

            </div>
        );
    }

    // =========================================================
    // UI
    // =========================================================

    return (
        <div className="relative">

            {/* HEADER */}

            <div className="flex mt-3 items-center gap-3 font-semibold text-sm md:text-lg">

                <span
                    onClick={() => setSection("project")}
                    className="text-[#3B82F6] block cursor-pointer"
                >
                    Project
                </span>

                <span className="text-gray-500">
                    /
                </span>

                <span className="text-white">
                    Edit Project
                </span>

            </div>

            {/* TITLE */}

            <div className="mt-12">

                <h1 className="md:text-2xl text-lg font-semibold text-white">
                    Edit Project
                </h1>

                <p className="md:text-lg text-sm text-gray-400">
                    Update the details of your project
                </p>

            </div>

            {/* FORM */}

            <form
                onSubmit={handleSubmit}
                className="flex text-white mt-8 gap-3 items-start md:flex-row flex-col"
            >

                {/* LEFT SIDE */}

                <div className="border flex flex-col gap-5 p-5 bg-[#0B1422] border-[#1E293B] rounded-2xl w-full">

                    {/* TITLE */}

                    <label className="w-full">

                        <p className="font-semibold">
                            Project Title
                            <span className="text-red-500">
                                {" "}*
                            </span>
                        </p>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="e.g. VendMall SaaS"
                            className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm"
                        />

                    </label>

                    {/* ROLE + COMPLETED */}

                    <div className="flex gap-3 items-center flex-col md:flex-row">

                        <label className="w-full">

                            <p className="font-semibold">
                                Role
                                <span className="text-red-500">
                                    {" "}*
                                </span>
                            </p>

                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Full Stack Developer"
                                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm"
                            />

                        </label>

                        <label className="w-full">

                            <p className="font-semibold">
                                Completed
                            </p>

                            <input
                                type="text"
                                name="completed"
                                value={formData.completed}
                                onChange={handleChange}
                                placeholder="e.g. 2026"
                                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm"
                            />

                        </label>

                    </div>

                    {/* OVERVIEW */}

                    <label>

                        <p className="font-semibold">
                            Overview
                            <span className="text-red-500">
                                {" "}*
                            </span>
                        </p>

                        <textarea
                            name="overview"
                            value={formData.overview}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Describe the project..."
                            className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm resize-none"
                        />

                    </label>

                    {/* PROBLEM */}

                    <label>

                        <p className="font-semibold">
                            Problem
                        </p>

                        <textarea
                            name="problem"
                            value={formData.problem}
                            onChange={handleChange}
                            rows="3"
                            placeholder="What problem was this project solving?"
                            className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm resize-none"
                        />

                    </label>

                    {/* SOLUTION */}

                    <label>

                        <p className="font-semibold">
                            Solution
                        </p>

                        <textarea
                            name="solution"
                            value={formData.solution}
                            onChange={handleChange}
                            rows="3"
                            placeholder="How did you solve the problem?"
                            className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm resize-none"
                        />

                    </label>

                    {/* TECH STACK */}

                    <label>

                        <p className="font-semibold">
                            Tech Stack
                            <span className="text-red-500">
                                {" "}*
                            </span>
                        </p>

                        <input
                            type="text"
                            name="stack"
                            value={formData.stack}
                            onChange={handleChange}
                            required
                            placeholder="React, Node.js, MongoDB"
                            className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm"
                        />

                        <small className="text-gray-500">
                            Separate technologies with commas
                        </small>

                    </label>

                    {/* FEATURES */}

                    <label>

                        <p className="font-semibold">
                            Features
                        </p>

                        <textarea
                            name="features"
                            value={formData.features}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Authentication, Dashboard, Payments"
                            className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm resize-none"
                        />

                        <small className="text-gray-500">
                            Separate features with commas
                        </small>

                    </label>

                </div>

                {/* RIGHT SIDE */}

                <div className="w-full flex flex-col gap-3 md:max-w-180">

                    {/* MEDIA CARD */}

                    <div className="border flex flex-col gap-5 p-5 bg-[#0B1422] border-[#1E293B] rounded-2xl">

                        {/* THUMBNAIL */}

                        <div>

                            <p className="font-semibold">
                                Project Thumbnail
                                <span className="text-red-500">
                                    {" "}*
                                </span>
                            </p>

                            <div className="mt-4">

                                {thumbnailPreview ? (

                                    <div className="relative rounded-lg overflow-hidden border border-[#1E293B]">

                                        <img
                                            src={thumbnailPreview}
                                            alt="New thumbnail preview"
                                            className="w-full h-40 object-cover"
                                        />

                                        <button
                                            type="button"
                                            onClick={removeNewThumbnail}
                                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full font-bold"
                                        >
                                            ×
                                        </button>

                                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs px-3 py-2">
                                            New Thumbnail
                                        </div>

                                    </div>

                                ) : existingThumbnail ? (

                                    <div className="relative rounded-lg overflow-hidden border border-[#1E293B]">

                                        <img
                                            src={existingThumbnail}
                                            alt="Project thumbnail"
                                            className="w-full h-40 object-cover"
                                        />

                                        <button
                                            type="button"
                                            onClick={removeExistingThumbnail}
                                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full font-bold"
                                        >
                                            ×
                                        </button>

                                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs px-3 py-2">
                                            Current Thumbnail
                                        </div>

                                    </div>

                                ) : (

                                    <div className="h-40 border border-dashed border-[#1E293B] rounded-lg bg-[#050B14] flex flex-col items-center justify-center text-gray-500">

                                        <span className="text-3xl mb-2">
                                            🖼️
                                        </span>

                                        <p className="text-sm">
                                            No thumbnail selected
                                        </p>

                                    </div>

                                )}

                            </div>

                            {/* REPLACE THUMBNAIL */}

                            <label className="block mt-4">

                                <p className="text-sm text-gray-400 mb-2">
                                    {existingThumbnail
                                        ? "Replace thumbnail"
                                        : "Choose thumbnail"}
                                </p>

                                <input
                                    type="file"
                                    name="thumbnail"
                                    accept="image/*"
                                    onChange={handleThumbnail}
                                    className="border border-[#1E293B] bg-[#050B14] w-full p-2 rounded-md text-sm"
                                />

                            </label>

                        </div>

                        {/* PROJECT MEDIA */}

                        <div>

                            <p className="font-semibold">
                                Project Images & Videos
                            </p>

                            <p className="text-xs text-gray-500 mt-1">
                                Current media and newly added media are shown below.
                            </p>

                            {/* EXISTING MEDIA */}

                            {existingImages.length > 0 && (

                                <div className="mt-4">

                                    <p className="text-sm text-gray-400 mb-2">
                                        Current Media
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">

                                        {existingImages.map((media, index) => {

                                            const mediaUrl =
                                                typeof media === "string"
                                                    ? media
                                                    : media.url;

                                            const mediaType =
                                                typeof media === "string"
                                                    ? (
                                                        media.match(
                                                            /\.(mp4|webm|ogg|mov)$/i
                                                        )
                                                            ? "video"
                                                            : "image"
                                                    )
                                                    : media.type === "video"
                                                        ? "video"
                                                        : "image";

                                            return (
                                                <div
                                                    key={index}
                                                    className="relative group border border-[#1E293B] rounded-lg overflow-hidden bg-[#050B14]"
                                                >

                                                    {mediaType === "video" ? (

                                                        <video
                                                            src={mediaUrl}
                                                            controls
                                                            className="w-full h-28 object-cover"
                                                        />

                                                    ) : (

                                                        <img
                                                            src={mediaUrl}
                                                            alt={`Project ${index + 1}`}
                                                            className="w-full h-28 object-cover"
                                                        />

                                                    )}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeExistingImage(index)
                                                        }
                                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-7 h-7 rounded-full font-bold"
                                                    >
                                                        ×
                                                    </button>

                                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white px-2 py-1">

                                                        {mediaType === "image"
                                                            ? "Current Image"
                                                            : "Current Video"}

                                                    </div>

                                                </div>
                                            );
                                        })}

                                    </div>

                                </div>

                            )}

                            {/* NEW MEDIA */}

                            {newImagePreviews.length > 0 && (

                                <div className="mt-5">

                                    <p className="text-sm text-gray-400 mb-2">
                                        New Media
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">

                                        {newImagePreviews.map(
                                            (media, index) => (

                                                <div
                                                    key={index}
                                                    className="relative group border border-[#1E293B] rounded-lg overflow-hidden bg-[#050B14]"
                                                >

                                                    {media.type === "image" ? (

                                                        <img
                                                            src={media.url}
                                                            alt={`New project ${index + 1}`}
                                                            className="w-full h-28 object-cover"
                                                        />

                                                    ) : (

                                                        <video
                                                            src={media.url}
                                                            controls
                                                            className="w-full h-28 object-cover"
                                                        />

                                                    )}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeNewImage(index)
                                                        }
                                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-7 h-7 rounded-full font-bold"
                                                    >
                                                        ×
                                                    </button>

                                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white px-2 py-1">

                                                        {media.type === "image"
                                                            ? "New Image"
                                                            : "New Video"}

                                                    </div>

                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>

                            )}

                            {/* EMPTY MEDIA */}

                            {existingImages.length === 0 &&
                                newImagePreviews.length === 0 && (

                                    <div className="mt-4 h-40 border border-dashed border-[#1E293B] rounded-lg bg-[#050B14] flex flex-col items-center justify-center text-gray-500">

                                        <span className="text-3xl mb-2">
                                            🖼️
                                        </span>

                                        <p className="text-sm">
                                            No project media
                                        </p>

                                        <p className="text-xs text-gray-600 mt-1">
                                            Add images or videos below
                                        </p>

                                    </div>

                                )}

                            {/* ADD MORE MEDIA */}

                            <label className="block mt-4">

                                <p className="text-sm text-gray-400 mb-2">
                                    Add more images or videos
                                </p>

                                <input
                                    type="file"
                                    name="images"
                                    accept="image/*,video/*"
                                    multiple
                                    onChange={handleImages}
                                    className="border border-[#1E293B] bg-[#050B14] w-full p-2 rounded-md text-sm"
                                />

                            </label>

                        </div>

                    </div>

                    {/* OTHER DETAILS */}

                    <div className="border flex flex-col gap-5 p-5 bg-[#0B1422] border-[#1E293B] rounded-2xl w-full">

                        {/* CHALLENGES */}

                        <label>

                            <p className="font-semibold">
                                Challenges
                            </p>

                            <textarea
                                name="challenges"
                                value={formData.challenges}
                                onChange={handleChange}
                                rows="3"
                                placeholder="API integration, authentication..."
                                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm resize-none"
                            />

                            <small className="text-gray-500">
                                Separate challenges with commas
                            </small>

                        </label>

                        {/* LEARNED */}

                        <label>

                            <p className="font-semibold">
                                What I Learned
                            </p>

                            <textarea
                                name="learned"
                                value={formData.learned}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Better API architecture, deployment..."
                                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm resize-none"
                            />

                            <small className="text-gray-500">
                                Separate lessons with commas
                            </small>

                        </label>

                        {/* GITHUB */}

                        <label>

                            <p className="font-semibold">
                                GitHub URL
                            </p>

                            <input
                                type="url"
                                name="github"
                                value={formData.github}
                                onChange={handleChange}
                                placeholder="https://github.com/..."
                                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm"
                            />

                        </label>

                        {/* LIVE */}

                        <label>

                            <p className="font-semibold">
                                Live URL
                            </p>

                            <input
                                type="url"
                                name="live"
                                value={formData.live}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md focus:outline-none focus:border-[#3B82F6] placeholder:text-sm"
                            />

                        </label>

                        {/* FEATURED */}

                        <label className="flex items-center gap-3 cursor-pointer">

                            <input
                                type="checkbox"
                                name="featured"
                                checked={formData.featured}
                                onChange={handleChange}
                                className="w-4 h-4"
                            />

                            <span className="font-semibold">
                                Featured Project
                            </span>

                        </label>

                        {/* BUTTONS */}

                        <div className="flex gap-3 flex-col md:flex-row">

                            <button
                                type="button"
                                onClick={() => setSection("project")}
                                disabled={loading}
                                className="w-full border border-[#1E293B] hover:bg-[#111C2D] disabled:opacity-50 p-3 rounded-lg font-semibold transition"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 p-3 rounded-lg font-semibold transition"
                            >
                                {loading
                                    ? "Updating Project..."
                                    : "Update Project"}
                            </button>

                        </div>

                        {/* MESSAGE */}

                        {message && (

                            <p
                                className={`text-sm text-center ${
                                    messageType === "success"
                                        ? "text-green-400"
                                        : "text-red-400"
                                }`}
                            >
                                {message}
                            </p>

                        )}

                    </div>

                </div>

            </form>

            {/* LOADING OVERLAY */}

            {loading && (

                <div className="absolute z-50 inset-0 top-0 left-0 w-full h-full min-h-screen flex justify-center items-center bg-black/20">

                    <div className="bg-gray-950 min-w-20 gap-3 p-4 min-h-20 rounded-xl border border-gray-700 flex flex-col justify-center items-center shadow-xl">

                        <span className="animate-spin w-8 h-8 rounded-full border-2 border-gray-50 border-t-transparent">
                        </span>

                        <small className="font-bold tracking-wider text-white">
                            Updating...
                        </small>

                    </div>

                </div>

            )}

        </div>
    );
};

export default Edit_Project;