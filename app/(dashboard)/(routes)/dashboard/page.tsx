import { UserButton } from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-6xl text-green-500">Hello Word</h1>

      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
