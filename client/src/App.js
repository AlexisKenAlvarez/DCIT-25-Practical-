import './App.css';
import { useState } from 'react';
import AllData from './components/AllData';
import Find from './components/Find';
import Update from './components/Update';
import Delete from './components/Delete';


function App() {
	const [selected, setSelected] = useState("data")

	const nav = [
		{
			label: "find"
		},
		{
			label: "update"
		},
		{
			label: "delete"
		},
	]

	const handleNav = (str) => {
		setSelected(str)
	}

	return (
		<>
			<div className='w-full h-screen'>
				<div className='max-w-[1600px] w-full h-full mx-auto overflow-y-scroll'>
					<h1 className='text-lg text-center mt-10 font-bold'>Alexis Ken Alvarez</h1>
					<p className='text-md text-center mt-2'>Practical</p>

					<p className='cursor-pointer bg-slate-200 p-2 px-7 hover:bg-slate-300 transition-all ease-in-out w-[10rem] mx-auto mt-3' onClick={() => {handleNav('data')}}>Show all data</p>

					<div className='mx-auto w-fit flex h-fit mt-10'>
						{nav.map((items, i) => {
							return (
								<p key={i} className='cursor-pointer bg-slate-200 p-2 px-7 hover:bg-slate-300 transition-all ease-in-out capitalize' onClick={() => {handleNav(items.label)}}>{items.label}</p>
							)
						})}
					</div>

					<div className='bg-slate-200 w-full h-full max-w-[700px] mx-auto p-7'>
						{selected === 'data' ? <AllData/> : selected === 'find' ? <Find/> : selected === 'update' ? <Update/> : selected === 'delete' ? <Delete/> : null}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
