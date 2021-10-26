import './App.css'
import DataTable from '../src/lib/components/DataTable/DataTable'
import { data, columns } from './data'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <DataTable data={data} columns={columns}></DataTable>
        </div>
    )
}

export default App
