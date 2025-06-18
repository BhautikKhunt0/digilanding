import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'
import { insertContactSchema } from '@/shared/schema'
import { z } from 'zod'

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