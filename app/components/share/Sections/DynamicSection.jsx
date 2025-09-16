
function DynamicSection({ title, children }) {
  return (
    <div className="grid grid-col-1 py-5  justify-center text-center">
      <div className="max-w-lg md:max-w-4xl">
        <h1 className="font-bold text-3xl">{title}</h1>
      </div>
      <div className="flex justify-center items-center w-full">
        {children}
      </div>
    </div>
  )
}
export default DynamicSection
