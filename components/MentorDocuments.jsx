import { useState } from 'react'
import Dropzone from './Dropzone'

export default function MentorDocuments({ form, setForm }) {
  const [panCard, setPanCard] = useState(null)
  const [video, setVideo] = useState(null)

  return (
    <div>
      <h1 className="text-primary font-extrabold text-3xl text-left w-full">
        You are almost there <br />
        Upload your documents
      </h1>
      <Dropzone
        label="Upload PAN Card"
        onPicked={(e) => setPanCard(e)}
        value={panCard}
      />
      <Dropzone
        label="Upload Your Video"
        onPicked={(e) => setVideo(e)}
        value={video}
      />
    </div>
  )
}
