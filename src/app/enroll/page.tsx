// app/enroll/page.tsx

import type { Metadata } from "next";
import { User, GraduationCap, UploadCloud, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Enrollment Application | Sunny Meadows School",
  description:
    "Enroll your child at Sunny Meadows School for the upcoming academic year. Accepting applications for Nursery, Kindergarten, and Grades 1-6.",
};

export default function SchoolEnrollmentPage() {
  // In a real app, you would use React state (useState) to handle form data and conditional logic.
  // For example: const [selectedGrade, setSelectedGrade] = useState('');

  return (
    <div className="bg-primary-50 dark:bg-gray-900 py-[2rem]">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
            Gesu Bambino Parochial School Inc.
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Enrollment Application
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We are excited to welcome your child into our learning community.
            Please complete the form below.
          </p>
        </div>

        {/* Enrollment Form */}
        <div className="mt-12 max-w-4xl mx-auto">
          <form
            action="#"
            method="POST"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl shadow-primary/20 space-y-8 divide-y divide-gray-200 dark:divide-gray-700"
          >
            {/* Section 1: Student Information */}
            <div className="p-8 sm:p-10">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-primary-500" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Student Information
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Details about the child you are enrolling.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="student_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Student&apos;s Full Name
                  </label>
                  <input
                    type="text"
                    name="student_name"
                    id="student_name"
                    required
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    required
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="grade_level"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Applying for Grade
                  </label>
                  <select
                    id="grade_level"
                    name="grade_level"
                    required
                    className="p-2 mt-1 block w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                  >
                    <optgroup label="Preschool">
                      <option value="Nursery">Nursery</option>
                      <option value="Kinder 1">Kinder 1</option>
                      <option value="Kinder 2">Kinder 2</option>
                    </optgroup>
                    <optgroup label="Grade School">
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                    </optgroup>
                  </select>
                </div>
                {/* This field could be shown conditionally based on the selected grade */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="previous_school"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Previous School Name (if applicable)
                  </label>
                  <input
                    type="text"
                    name="previous_school"
                    id="previous_school"
                    placeholder="For Grade 1-6 applicants"
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Parent/Guardian Information */}
            <div className="p-8 sm:p-10">
              <div className="flex items-center">
                <User className="h-8 w-8 text-primary-500" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Parent/Guardian Information
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Your contact and personal details.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <label
                    htmlFor="parent_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="parent_name"
                    id="parent_name"
                    autoComplete="name"
                    required
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="relationship"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Relationship to Student
                  </label>
                  <input
                    type="text"
                    name="relationship"
                    id="relationship"
                    placeholder="e.g., Mother, Father, Guardian"
                    required
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    required
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Home Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    required
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section 3: Document Uploads */}
            <div className="p-8 sm:p-10">
              <div className="flex items-center">
                <UploadCloud className="h-8 w-8 text-primary-500" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Required Documents
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Please upload a clear copy of the student&apos;s birth
                certificate and previous report card (if applicable). PDF, PNG,
                or JPG accepted.
              </p>

              <div className="mt-6">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer block w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center hover:border-primary-400 dark:hover:border-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-800"
                >
                  <div className="flex flex-col items-center justify-center">
                    <UploadCloud className="h-12 w-12 text-gray-400" />
                    <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                      Click to upload or drag and drop
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      Max file size: 5MB
                    </span>
                  </div>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    className="sr-only"
                  />
                </label>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Note: A secure file upload system (e.g., to AWS S3) should be
                  implemented on the backend.
                </p>
              </div>
            </div>

            {/* Section 4: Agreements and Submission */}
            <div className="px-8 sm:px-10 py-8 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl">
              <div className="space-y-4">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms-and-policy"
                      name="terms-and-policy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms-and-policy"
                      className="font-medium text-gray-700 dark:text-gray-200"
                    >
                      I have read and agree to the school&apos;s{" "}
                      <a
                        href="/terms"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Terms of Enrollment
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-primary-500 transition duration-300"
                >
                  <ShieldCheck className="mr-3 h-6 w-6" />
                  Submit Application Securely
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
