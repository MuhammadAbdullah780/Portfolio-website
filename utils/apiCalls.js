

export async function getSkills() {
  const res = await fetch(`${process.env.HOST_URL}/api/getskills`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function getProjects() {
  const res = await fetch(`${process.env.HOST_URL}/api/getprojects`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function getUser() {
    const res = await fetch(`${process.env.HOST_URL}/api/getuser`, {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    return data;
  }
