const Dashboard = () => {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="mb-4 bg-white p-4 shadow"
        >
          <h2 className="text-lg font-semibold">Post {i + 1}</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            quidem.
          </p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
