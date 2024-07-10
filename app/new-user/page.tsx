import { prisma } from '@/utils/db'
import { auth, EmailAddress } from '@clerk/nextjs/server'

const createNewUser = async () => {
  const { userId } = await auth()
  const match = await prisma.user.findUnique({
    where: {
      clerkId: userId!,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: userId!,
        email: (await EmailAddress.get(userId!))?.email,
      },
    })
  }
}
export const NewUser = async () => {
  await createNewUser()
  return <h2>hello</h2>
}
