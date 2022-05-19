import Navigation from "../components/Navigation/Navigation";

export default function Products() {
    return (
        <div>
            <Navigation />
            <div>
                <div className="flex justify-center items-center gap-10 mt-28">
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled selected hidden>Systems</option>
                        <option >Adventure</option>
                        <option>Action</option>
                        <option>RPG</option>
                    </select>
                    <select>
                        <option value="" disabled selected hidden>Platforms</option>
                        <option>Adventure</option>
                        <option>Action</option>
                        <option>RPG</option>
                    </select>
                    <select>
                        <option value="" disabled selected hidden>Genres</option>
                        <option>Adventure</option>
                        <option>Action</option>
                        <option>RPG</option>
                    </select>
                    <select>
                        <option value="" disabled selected hidden>Sort by</option>
                        <option>Adventure</option>
                        <option>Action</option>
                        <option>RPG</option>
                    </select>
                </div>
            </div>
        </div >
    )
}