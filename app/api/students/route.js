import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/Student";
import Event from "@/app/models/Event";

export async function GET() {
    await connectDB();
    const students = await Student.find().populate("events");
    return NextResponse.json(students);
}

export async function POST(req) {
    await connectDB();
    const newStudent = await req.json();
    const student = new Student(newStudent);
    await student.save();
    return NextResponse.json(student);
}