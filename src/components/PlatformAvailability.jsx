import { usePlatformsIcons } from "../hooks/usePlatformsIcons"

const PlatformAvailability = ({ platforms }) => {

    return (
        <>
            <div className='flex justify-center gap-4'>
                {usePlatformsIcons(platforms).map(p => (
                    <div key={p} className='border bg-slate-600 border-slate-400 rounded-md p-2 flex items-center w-14'>
                        <img src={p} alt={`${p}'s icon`} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default PlatformAvailability
