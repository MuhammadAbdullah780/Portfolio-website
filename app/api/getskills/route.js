import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const skillsSnapshot = await getDocs(collection(db, "skills"));
    const skillsData = skillsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return NextResponse.json(skillsData,{ 
      status:200,
    })
  } catch(err) {
    NextResponse.error({
      msg:err.message
    })
  }
}
