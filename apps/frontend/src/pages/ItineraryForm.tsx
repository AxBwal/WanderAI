"use client"
import { useState } from "react"

const ItineraryForm=()=>{
    const [formData, setFormData] = useState({
        destination: "",
        budget: "",
        interests: "",
        startDate: "",
        endDate: "",
      });

      const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        console.log("Form Data:", formData);
      }

      const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }
    return (
        <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Plan Your AI-Powered Itinerary</h2>

      <label className="block mb-2">
        Destination:
        <input 
          type="text" 
          name="destination" 
          value={formData.destination} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mt-1"
          required 
        />
      </label>

      <label className="block mb-2">
        Budget:
        <input 
          type="number" 
          name="budget" 
          value={formData.budget} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mt-1"
          required 
        />
      </label>

      <label className="block mb-2">
        Interests (e.g., adventure, beaches, culture):
        <textarea 
          name="interests" 
          value={formData.interests} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mt-1"
          required 
        />
      </label>

      <label className="block mb-2">
        Start Date:
        <input 
          type="date" 
          name="startDate" 
          value={formData.startDate} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mt-1"
          required 
        />
      </label>

      <label className="block mb-4">
        End Date:
        <input 
          type="date" 
          name="endDate" 
          value={formData.endDate} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mt-1"
          required 
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Generate Itinerary
      </button>
    </form>
    )
}

export default ItineraryForm