import React from 'react';

const IMAGES = [
  "1663841120-02729600.png",
  "1778752132779.png",
  "1778752164211.png",
  "1778752169205.png",
  "1778752172049.png",
  "1778752653614.png",
  "1778752676551.png",
  "1778752690100.png",
  "Quest-logo.png",
  "hamdard-logo-png_seeklogo-304708.png",
  "images (1) (1).png",
  "images (11).jpeg",
  "images (12).jpeg",
  "images (2) (1).png",
  "images (4).png",
  "images (9).jpeg"
];

export default function ImagePreview() {
  return (
    <div className="container mx-auto p-8 pt-12">
      <h1 className="text-3xl font-black text-green-800 mb-2">Image Mapper</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        I can't see these images directly, so I need your help! Here are the 16 images you uploaded. 
        Please look at them and tell me which number corresponds to which Category or Brand in our chat.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {IMAGES.map((img, index) => (
          <div key={img} className="border-2 border-gray-200 rounded-xl p-4 flex flex-col items-center bg-gray-50 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-pink-500 text-white font-black px-3 py-1 rounded-br-xl shadow-md z-10 text-lg">
              #{index + 1}
            </div>
            
            <div className="h-40 w-full mb-4 flex items-center justify-center bg-white border border-gray-100 rounded-lg overflow-hidden p-2">
              <img 
                src={`/brand_category_images/${img}`} 
                alt={`Uploaded image ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            <p className="text-xs text-gray-400 break-all text-center w-full">{img}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
