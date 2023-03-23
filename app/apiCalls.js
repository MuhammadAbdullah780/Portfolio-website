

export async function getSkills() {
  const response = await fetch(`${process.env.HOST_URL}/api/getskills`, {
    cache:'no-cache'
  });
  const data = await response.json();
  return data;
}

export async function getProjects() {
  const response = await fetch(`${process.env.HOST_URL}/api/getprojects`, {
    cache:'no-cache'
  });
  const data = await response.json();
  return data;
}

export async function getUser() {
    const response = await fetch(`${process.env.HOST_URL}/api/getuser`, {
      cache:'no-cache'
    });
    const data = await response.json();
    return data;
  }
