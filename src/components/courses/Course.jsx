
const Course = ({course, handleCourseSelection}) => {
    const {name, description, photo, price, credit} = course;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure>
    <img src={photo} alt={name} />
    </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{name}</h2>
    <p className="text-[#1C1B1B99]">{description}</p>
    <div className="flex items-center">
        <p className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<p className="text-[#1C1B1B99] font-semibold">Price: {price}</p>
</p>
        <p className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
<p className="text-[#1C1B1B99] font-semibold">Credit: {credit}hr</p>
</p>
    </div>
    <div className="card-actions">
      <button onClick={()=> handleCourseSelection(course)} style={{border:'2px solid #2F80ED'}} className="btn font-semibold text-lg hover:text-black hover:bg-slate-300 bg-[#2F80ED] w-full text-white border-[]">Select</button>
    </div>
  </div>
</div>
    );
};

export default Course;