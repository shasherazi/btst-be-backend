import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const users = [
  {
    email: "bob@email.com",
    username: "bob",
    password: "bob_12345_random",
  },
  {
    email: "alice@email.com",
    username: "alice",
    password: "alice_67890_random",
  },
  {
    email: "john@email.com",
    username: "john",
    password: "john_13579_random",
  },
  {
    email: "susan@email.com",
    username: "susan",
    password: "susan_24680_random",
  },
  {
    email: "david@email.com",
    username: "david",
    password: "david_86420_random",
  },
  {
    email: "linda@email.com",
    username: "linda",
    password: "linda_31415_random",
  },
  {
    email: "michael@email.com",
    username: "michael",
    password: "michael_27182_random",
  },
  {
    email: "emma@email.com",
    username: "emma",
    password: "emma_59265_random",
  },
  {
    email: "william@email.com",
    username: "william",
    password: "william_35897_random",
  },
  {
    email: "olivia@email.com",
    username: "olivia",
    password: "olivia_93238_random",
  },
];

async function main() {
  // clear database
  await prisma.task.deleteMany();
  await prisma.user.deleteMany();

  users.forEach(async (user) => {
    // Create user
    const newUser = await prisma.user.create({
      data: user,
    });

    // Get user id
    const userId = newUser.id;

    // create 10 tasks for each user
    for (let i = 0; i < 10; i++) {
      await prisma.task.create({
        data: {
          title: `Task ${i + 1}`,
          description: `Description for task ${i + 1}`,
          userId: userId,
        },
      });
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
