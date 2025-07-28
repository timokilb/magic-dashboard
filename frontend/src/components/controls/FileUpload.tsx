import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Papa from 'papaparse'
import useFileStore from '../../stores/file-store'


const FileUpload = () => {

    const store = useFileStore()


    function readFileAsString(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => resolve(reader.result);  // file content as string
            reader.onerror = () => reject(reader.error);

            reader.readAsText(file); // read file as text
        });
    }


    const onDrop = useCallback(async acceptedFiles => {
        // // Do something with the files
        console.log(acceptedFiles[0], "THE FILES")
        try {

            const contents = await readFileAsString(acceptedFiles[0])
            const papaparseConfig =
            {
                delimiter: ",",	// auto-detect
                newline: "",	// auto-detect
                quoteChar: '"',
                escapeChar: '"',
                header: true,
                dynamicTyping: true,
            }
            const parsedCSV = Papa.parse(contents, papaparseConfig);
            console.log("nutte", parsedCSV.data)

            store.setFile(parsedCSV.dat)
            // const csv = Papa.unparse(data[, config]);
            // const csv = Papa.unparse(data[, config]);
        } catch (e) {
            console.log(e)
        }


        // Write zu store
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const printFile = (file: any) => {
        console.log(file)
    }

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default FileUpload