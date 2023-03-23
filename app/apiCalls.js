

export async function getSkills() {
  const response = await fetch(`${process.env.HOST_URL}/api/getskills`, {
    next: { revalidate: 10 },
    cache:'force-cache'
  });
  const data = await response.json();
  return data;
}

export async function getProjects() {
  const response = await fetch(`${process.env.HOST_URL}/api/getprojects`, {
    next: { revalidate: 10 },
    cache:'force-cache'
  });
  const data = await response.json();
  return data;
}

export async function getUser() {
    const response = await fetch(`${process.env.HOST_URL}/api/getuser`, {
      next: { revalidate: 10 },
      cache:'force-cache'
    });
    const data = await response.json();
    return data;
  }
