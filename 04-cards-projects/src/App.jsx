import{Bookmark} from 'lucide-react'
import Card from './components/Card'

function App() {

  const jobOpenings = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURb8n-hmXx9zW6sitSkjYFa7CPekza_sxoA&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMU2VI-2LG8thKFWx2VG8L5QT7uDTiZnoJQ&s",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Remote, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHskTepHx-bsveUjO3MdEMxqtiKwQbikk3nQ&s",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JPvedCBmNG39bU4Zvq1PJTRRl6Nc8OOimA&s",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujOkdW7NbL4MGxKaqcyXe-N5_T_TaXBNc5w&s",
    companyName: "Airbnb",
    datePosted: "2 months ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Remote, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_UF6AUy6dw9nNsUptL9xGPDDT9MAlHVkRw&s",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Chennai, India"
  }
];

console.log(jobOpenings);

// export default jobOpenings;

 
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        
      return <div key={idx} >
        <Card brandlogo={elem.brandlogo} company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      </div>
      })}
    </div>
  )
}

export default App
