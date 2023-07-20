import { UserButton } from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-6xl">Hello Word</h1>

      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
