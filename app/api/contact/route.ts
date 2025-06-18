import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const insertContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})

// In-memory storage for demo purposes
const contacts: Array<{
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  createdAt: Date;
}> = []

let nextId = 1

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = insertContactSchema.parse(body)
    const contact = await storage.createContact(validatedData)
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you soon.",
      contact: contact 
    }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        message: "Please check your form data", 
        errors: error.errors 
      }, { status: 400 })
    } else {
      console.error("Contact form error:", error)
      return NextResponse.json({ 
        success: false, 
        message: "Something went wrong. Please try again later." 
      }, { status: 500 })
    }
  }
}

export async function GET() {
  try {
    const contacts = await storage.getAllContacts()
    return NextResponse.json({ success: true, contacts })
  } catch (error) {
    console.error("Get contacts error:", error)
    return NextResponse.json({ 
      success: false, 
      message: "Failed to retrieve contacts" 
    }, { status: 500 })
  }
}