import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const projectsSnapshot = await getDocs(collection(db, "projects"));
    const projectData = projectsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return NextResponse.json({ data:projectData });
  } catch(err) {
    NextResponse.error({
      msg:err.message
    })
  }
}
