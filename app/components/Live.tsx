import { getLive } from '../utils/api'
import LiveCard from './LiveCard';
import { LiveData } from './types/app';
const Live = async() => {
    const liveData: LiveData = await getLive();
    // console.log(liveData)
  return (
    <section className="pt-6">
        <div className="container">
            {/* scrollbar */}
            <div className='flex space-x-3 overflow-scroll no-scrollbar p-4 -m-2'>
            {liveData.map(item=> (
                <LiveCard key={item.img} 
                img={item.img}
                title={item.title}/>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Live