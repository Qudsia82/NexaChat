const MessagesLoadingState = () => {
    const widths = ['40%', '60%', '45%', '70%', '55%', '65%'];

  return (
        <div className="max-w-3xl mx-auto space-y-6">
      {widths.map((width, index) => (
        <div
          key={index}
          className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          style={{ animationDelay: `${index * 150}ms` }}>
          <div 
            className="h-[60px] rounded-[18px] animate-shimmer"
            style={{
              width,
              background: 'linear-gradient(90deg, #4A4E69 0%, #5a5e79 50%, #4A4E69 100%)',
              backgroundSize: '200% 100%',
              opacity: 0.7
            }}>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  )
}

export default MessagesLoadingState