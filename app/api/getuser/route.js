import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const userSnapshot = await getDoc(doc(db, "users", 'Eoi8lQc9hseD3g6RJxPJ'));
    return NextResponse.json(userSnapshot.data(),{ 
      status:200,
    })
  } catch(err) {
    NextResponse.error({
      msg:err.message
    })
  }
}
