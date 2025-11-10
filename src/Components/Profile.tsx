import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Stats from "./Stats";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("/banner.jpg");

  const [profileUrl, setProfileUrl] = useState("/mike.jpg");

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-20 ">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background Image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 ">
          <label htmlFor="banner-upload " className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-8">
        <img
          src={profileUrl}
          alt="Channel logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />

        <button className="absolute ml-[3.6rem] z-10 mt-36 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 ">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="test-2xl font-bold ml-16 ">Michael Boakye Yiadom</h1>
          <p className="ml-16">2M Views</p>
          <p className="mt-2 ml-16 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            facere aspernatur voluptatum laboriosam aliquam aperiam officia
            maxime veritatis hic quasi omnis quisquam, ad alias dolore nihil ex
            amet quidem, voluptates enim officiis! Enim, a! Id facere debitis,
            dolorem asperiores eius earum a atque aliquid laudantium fuga optio,
            quisquam, quos vitae. Blanditiis modi voluptate omnis delectus?
          </p>
          <button className="mt-4 ml-16 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 ">
            Contact Me
          </button>
        </div>
      </div>
      <Stats />
    </div>
  );
};
export default Profile;
