interface Props {
	selectColor: (e: React.MouseEvent | React.ChangeEvent) => void;
}

const Colors = ({ selectColor }: Props) => {
	return (
		<div className='mx-auto flex flex-wrap justify-center gap-2 rounded p-4'>
			<input type='color' onChange={selectColor} />
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-50 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-100 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-200 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-300 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-400 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-500 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-600 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-700 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-800 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-900 duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-950 duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='ml-4 flex flex-col gap-1'>
				<button className='bg-soft-red-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-red-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-orange-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-orange-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-warm-gray-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-warm-gray-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-cocoa-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-cocoa-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-lemon-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-lemon-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-olive-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-olive-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-green-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-green-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-sky-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-sky-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-blue-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-blue-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-lavender-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-lavender-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='bg-soft-berry-50 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-100 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-200 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-300 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-400 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-500 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-600 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-700 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-800 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-900 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
				<button className='bg-soft-berry-950 h-5 w-5 cursor-pointer rounded-full border border-[#0003] duration-150 hover:scale-110' onClick={selectColor}></button>
			</div>
		</div>
	);
};

export default Colors;
