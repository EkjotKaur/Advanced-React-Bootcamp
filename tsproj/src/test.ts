
async function getUser(): Promise<{
    id: number,
    name: string
}> {
    return { id: 12, name: 'Peter' }
}

type P = ReturnType<typeof getUser>; // Promise
type User = Awaited<ReturnType<typeof getUser>>;
// type User = Awaited<P>;
