


import { API_URL } from "../config";
import React, { useState } from "react";

const Add_Project = ({ setSection }) => {

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

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);


  // -------------------------
  // HANDLE TEXT INPUT
  // -------------------------

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

  };



  // -------------------------
  // THUMBNAIL
  // -------------------------

  const handleThumbnail = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setThumbnail(file);

    const previewUrl = URL.createObjectURL(file);
    setThumbnailPreview(previewUrl);
  };


  // -------------------------
  // PROJECT IMAGES
  // -------------------------

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    setImages((prev) => [...prev, ...files]);

    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
    }));

    setImagePreviews((prev) => [...prev, ...previews]);
  };


  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));

    setImagePreviews((prev) => {
      URL.revokeObjectURL(prev[index].url);

      return prev.filter((_, i) => i !== index);
    });
  };


  const removeThumbnail = () => {
    if (thumbnailPreview) {
      URL.revokeObjectURL(thumbnailPreview);
    }

    setThumbnail(null);
    setThumbnailPreview(null);
  };

  // -------------------------
  // SUBMIT
  // -------------------------

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setMessage("");

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
          formData.stack
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      data.append(
        "features",
        JSON.stringify(
          formData.features
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      data.append(
        "challenges",
        JSON.stringify(
          formData.challenges
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      data.append(
        "learned",
        JSON.stringify(
          formData.learned
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      // Links
      data.append("github", formData.github);
      data.append("live", formData.live);
      data.append("completed", formData.completed);

      // Featured
      data.append("featured", formData.featured);

      // Thumbnail
      if (thumbnail) {
        data.append("thumbnail", thumbnail);
      }

      // Multiple images
      images.forEach((image) => {
        data.append("images", image);
      });



      const response = await fetch(
        `${API_URL}/projects`,
        {
          method: "POST",
          body: data,
        }
      );


      const result = await response.json();


      if (!response.ok) {
        throw new Error(result.message || "Failed to create project");
      }


      setMessage("Project created successfully 🎉");

      console.log(result);


      // Reset form
      setFormData({
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

      setThumbnail(null);
      setImages([]);


      // Optional: return to projects
      // setSection("project");


    } catch (error) {

      console.error(error);

      setMessage(error.message);

    } finally {

      setLoading(false);

    }

  };



  return (

    <div>

      {/* HEADER */}

      <div className="flex mt-3 items-center gap-3 font-semibold text-sm md:text-lg">

        <span
          onClick={() => setSection('project')}
          className="text-[#3B82F6] block cursor-pointer ">
          Project
        </span>

        <span className="text-gray-500">
          /
        </span>

        <span className="text-white">
          Add New Project
        </span>

      </div>



      {/* TITLE */}

      <div className="mt-12">

        <h1 className="md:text-2xl text-lg font-semibold text-white">
          Add New Project
        </h1>

        <p className="md:text-lg text-sm text-gray-400">
          Fill in the details for your new project
        </p>

      </div>



      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="flex text-white mt-8 gap-3 items-start md:flex-row flex-col"
      >


        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="border flex flex-col gap-5 p-5 bg-[#0B1422] border-[#1E293B] rounded-2xl w-full">


          {/* TITLE */}

          <label className="w-full">

            <p className="font-semibold">
              Project Title
              <span className="text-red-500"> *</span>
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
                <span className="text-red-500"> *</span>
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
              <span className="text-red-500"> *</span>
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
              <span className="text-red-500"> *</span>
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



        {/* =========================
            RIGHT SIDE  
        ========================== */}

        <div className="w-full flex flex-col gap-3 md:max-w-180">

          <div className="border flex flex-col gap-5 p-5 bg-[#0B1422] border-[#1E293B] rounded-2xl ">


            {/* THUMBNAIL */}

            <label>

              <p className="font-semibold">
                Project Thumbnail
                <span className="text-red-500"> *</span>
              </p>

              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                required
                onChange={handleThumbnail}
                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md text-sm"
              />

            </label>


            


            <div className="mt-4">
              {thumbnailPreview ? (
                <div className="relative mt-4 rounded-lg overflow-hidden border border-[#1E293B]">
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="w-full h-40 object-cover"
                  />

                  <button
                    type="button"
                    onClick={removeThumbnail}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full font-bold"
                  >
                    ×
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs px-3 py-2">
                    Thumbnail Preview
                  </div>
                </div>
              ) : (
                <div className="h-40 border border-dashed border-[#1E293B] rounded-lg bg-[#050B14] flex flex-col items-center justify-center text-gray-500">

                  <span className="text-3xl mb-2">
                    🖼️
                  </span>

                  <p className="text-sm">
                    No project media selected
                  </p>

                  <p className="text-xs text-gray-600 mt-1">
                    Images  will appear here
                  </p>

                </div>
              )}
            </div>



            {/* PROJECT IMAGES */}

            <label>

              <p className="font-semibold">
                Project Images
              </p>

              <input
                type="file"
                name="images"
                accept="image/*,video/*"
                multiple
                onChange={handleImages}
                className="border border-[#1E293B] bg-[#050B14] w-full p-2 mt-3 rounded-md text-sm"
              />

              <small className="text-gray-500">
                Select multiple images or videos
              </small>
            </label>

            <div className="mt-4">
              {imagePreviews.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {imagePreviews.map((media, index) => (
                    <div
                      key={index}
                      className="relative group border border-[#1E293B] rounded-lg overflow-hidden bg-[#050B14]"
                    >
                      {media.type === "image" ? (
                        <img
                          src={media.url}
                          alt={`Project ${index + 1}`}
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
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-7 h-7 rounded-full font-bold"
                      >
                        ×
                      </button>

                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white px-2 py-1">
                        {media.type === "image" ? "Image" : "Video"} {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-40 border border-dashed border-[#1E293B] rounded-lg bg-[#050B14] flex flex-col items-center justify-center text-gray-500">

                  <span className="text-3xl mb-2">
                    🖼️
                  </span>

                  <p className="text-sm">
                    No project media selected
                  </p>

                  <p className="text-xs text-gray-600 mt-1">
                    Images and videos will appear here
                  </p>

                </div>
              )}
            </div>



         

          </div>
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

          </label>


             {/* LINKS */}

          <div className="flex gap-3 flex-col ">

            <label className="w-full">

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



            <label className="w-full">

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



            {/* SUBMIT */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 p-3 rounded-lg font-semibold transition"
            >

              {loading ? "Creating Project..." : "Create Project"}

            </button>



            {/* MESSAGE */}

            {message && (

              <p className="text-sm text-center text-gray-300">
                {message}
              </p>

            )}

          </div>

          </div>
        </div>

      </form>

    </div>
  );
};

export default Add_Project;