import React, { Component } from 'react';

const AxiosAndFetch = () => {
    return (
        <table>
            <tr>
                <th>Axios</th>
                <th>Fetch</th>
            </tr>
            <tr>
                <td>
                    <ol>
                        <li>Axios has url in request object.</li>
                        <li>Axios is a stand-alone third party package that can be easily installed.</li>
                        <li>Axios enjoys built-in XSRF protection.</li>
                        <li>Axios uses the data property.</li>
                        <li>Axios’ data contains the object.	</li>
                        <li>Axios request is ok when status is 200 and statusText is ‘OK’.</li>
                        <li>Axios performs automatic transforms of JSON data.</li>
                        <li>Axios allows cancelling request and request timeout.</li>
                        <li>Axios has the ability to intercept HTTP requests.</li>
                        <li>Axios has built-in support for download progress.</li>
                        <li>Axios has wide browser support.</li>
                        <li>Axios “GET” call can have body Content.</li>
                    </ol>
                </td>
                <td>
                    <ol>
                        <li>Fetch has no url in request object.</li>
                        <li>Fetch is built into most modern browsers; no installation is required as such.</li>
                        <li>Fetch does not enjoy built-in XSRF protection.</li>
                        <li>Fetch uses the body property.</li>
                        <li>Fetch’s body has to be stringified.</li>
                        <li>Fetch request is ok when response object contains the ok property.</li>
                        <li>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</li>
                        <li>Fetch does not allow cancelling request and request timeout.</li>
                        <li>Fetch, by default, doesn’t provide a way to intercept requests.</li>
                        <li>Fetch does not support upload progress.</li>
                        <li>Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).</li>
                        <li>Fetch “GET” call cannot have body Content.</li>
                    </ol>
                </td>
            </tr>
        </table>
    )
}

export default AxiosAndFetch;