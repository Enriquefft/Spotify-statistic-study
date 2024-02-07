import { populateDB } from "@/lib/actions";

import {
  varietySchema,
  genderSchema,
  districtSchema,
  studyCenterSchema,
} from "@/lib/schemas";

import type { UserDefinedData } from "@/lib/data";

/**
 * @param props component props
 * @param props.accessToken Access token for the user
 * @returns User defined data form component
 */
export async function DataForm({ accessToken }: { accessToken: string }) {
  const submit = async (formData: FormData) => {
    const age = formData.get("age");

    const district = districtSchema.parse(formData.get("district"));
    const percievedFavouriteGender = genderSchema.parse(
      formData.get("percieved_favourite_gender"),
    );
    const percievedVariety = varietySchema.parse(
      formData.get("percieved_variety"),
    );
    const studyCenter = studyCenterSchema.parse(formData.get("study_center"));

    const data: UserDefinedData = {
      age: Number(age),
      district,
      percieved_favourite_gender: percievedFavouriteGender,
      percieved_variety: percievedVariety,
      study_center: studyCenter,
    };

    await populateDB(accessToken, data);
  };

  return (
    <form
      className="max-w-md mx-auto bg-black p-8 rounded shadow-md text-white"
      action={submit}
    >
      <label className="block mt-4">
        <span className="text-gray-700">Age</span>
        <input
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="number"
          name="age"
        />
      </label>

      <label className="block mt-4">
        <span className="text-gray-700">District</span>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="district"
        >
          {districtSchema.options.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </label>

      <label className="block mt-4">
        <span className="text-gray-700">Perceived Favourite Gender</span>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="percieved_favourite_gender"
        >
          {genderSchema.options.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </label>

      <label className="block mt-4">
        <span className="text-gray-700">Perceived Variety</span>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="percieved_variety"
        >
          {varietySchema.options.map((variety) => (
            <option key={variety} value={variety}>
              {variety}
            </option>
          ))}
        </select>
      </label>

      <label className="block mt-4">
        <span className="text-gray-700">Study Center</span>
        <input
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="study_center"
        />
      </label>

      <button
        className="mt-6 block w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-black font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
