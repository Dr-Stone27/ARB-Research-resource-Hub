import Image from "next/image"
import { Info, CheckCircle, FileText, Play } from "lucide-react"
import Link from "next/link"


export default function InsightsPanel() {
  const alerts = [
    {
      title: "You have Three (3) pending submissions!",
      url: "/dashboard/submissions"
    },
    {
      title: "Effects of Paper clusters on Iron complex Molecules",
      url: "/dashboard/submissions"
    },
    {
      title: "Iron complex molecule resiteration and destroyance of sub shellls",
      url: "/dashboard/submissions"
    }
  ]

  const notifications = [
    {
      heading: "Upload Approved",
      subheading: "Your file titled “Effects of Water quality on compressive strength of mortar” has been approved for Publication",
      url: "/dashboard/submissions"
    },
    {
      heading: "Submission Under Review",
      subheading: "Your paper 'Quantum Computing Applications in Cryptography' is currently under peer review.",
      url: "/dashboard/submissions"
    },
    {
      heading: "Revision Requested",
      subheading: "Please address the reviewer comments for 'Neural Networks for Early Disease Detection'.",
      url: "/dashboard/submissions"
    }
  ]

  const resourcesArr = [
    { title: "(PDF) How to use ChatGPT to aid your research", isVideo: false },
    { title: "(Video) How to upload files on ARB ResearcHUB", isVideo: true }
  ]

  return (
    <div className="hidden md:block sticky top-24 space-y-6 w-[250px] min-w-[250px] max-w-[250px] h-[calc(100vh-132px)] bg-white border border-gray-200 rounded-lg p-4 overflow-scroll scrollbar-hide">
      <div className="space-y-1.5">
        {alerts.map((action, index) => (
          <Link key={index} href={action.url} className="flex items-start gap-2 py-px hover:text-gray-600 rounded-md">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p className="text-xs leading-relaxed line-clamp-1">
              {action.title}
            </p>
          </Link>
        ))}
      </div>

      <hr className="my-3 border-gray-200" />

      {/* Milestones */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Your Milestones
        </h3>

        <div className="flex flex-col items-center mb-4">
          <div className="mb-2">
            <Image 
              src="/icons/medal.svg"
              alt="medal"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          <div className="text-center mb-2">
            <p className="text-base text-secondary-600 font-bold">Congratulations!</p>
            <p className="text-xs text-gray-500">You are a Gold Level Uploader</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full mt-5 mb-3">
            <div className="flex justify-between mb-1">
              <div>
                <div className="text-xs text-[#7200CC]">600 Uploads</div>
                <div className="text-[10px] text-gray-400">You&apos;ve reached</div>
              </div>
              <div className="text-right">
                <div className="text-xs">1000 Uploads</div>
                <div className="text-[10px] text-gray-400">You&apos;ve reached</div>
              </div>
            </div>
            <div className="w-full bg-[#E9CCFF] rounded-full h-1.5 mt-3">
              <div
                className="bg-[#7200CC] h-1.5 rounded-full transition-all"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          <Link href="/dashboard/badges" className="ms-auto py-1.5 text-xs font-medium rounded text-secondary-700 hover:text-secondary-500 hover:underline transition">
            View all badges
          </Link>
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      {/* Notifications */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Notifications
          </h3>
          
          <Link href="/dashboard/badges" className="ms-auto text-xs font-medium rounded text-secondary-700 hover:text-secondary-500 hover:underline transition">
            See All
          </Link>
        </div>

        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={index} className="space-y-1.5 bg-[#FAFAFA] p-2 rounded-md">
              <div className="text-xs text-secondary-600 rounded-sm">
                {notification.heading}
              </div>
              <div className="text-[10px] text-gray-600  line-clamp-2">
                {notification.subheading}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-secondary-600" />
            <span className="font-semibold text-secondary-600">
              ResourceHub
            </span>
          </div>
          
          <Link href="/dashboard/badges" className="ms-auto text-xs font-medium rounded text-secondary-700 hover:text-secondary-500 hover:underline transition">
            See All
          </Link>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Top Learners this week
        </h3>
        
        <div className="space-y-3">
          {resourcesArr.map((resource, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              {resource.isVideo ? <Play className="w-5 h-5 text-success-500" /> : <FileText className="w-5 h-5" />}

              <span className="text-xs line-clamp-1">
                {resource.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
