<template>
    <div class="card p-3" style="border-radius: 5px;">
        <table class=" table table-striperd " style="border-radius: px;">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Document Name</th>
                    <th>Contract</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <strong class="Document">Test</strong><br/>
                        <small class="me-3">Created Date: 05.12.2024 </small>
                        <small>Updated Date: 05.12.2024</small>
                    </td>
                    <td>Contract : 05.12.2024</td>
                    <td>Price : 100 000</td>
                    <td>
                        <strong class="Company">Uz Telecom</strong><br/>
                        <small>INN : 12345678</small>
                    </td>
                    <td>
                        <span class="status">
                            Test
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <strong class="Document">Test</strong><br/>
                        <small class="me-3">Created Date: 05.12.2024 </small>
                        <small>Updated Date: 05.12.2024</small>
                    </td>
                    <td>Contract : 05.12.2024</td>
                    <td>Price : 100 000</td>
                    <td>
                        <strong class="Company">Uz Telecom</strong><br/>
                        <small>INN : 12345678</small>
                    </td>
                    <td>
                        <span class="status">
                            Rouming
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                        <strong class="Document">Test</strong><br/>
                        <small class="me-3">Created Date: 05.12.2024 </small>
                        <small>Updated Date: 05.12.2024</small>
                    </td>
                    <td>Contract : 05.12.2024</td>
                    <td>Price : 100 000</td>
                    <td>
                        <strong class="Company">Uz Telecom</strong><br/>
                        <small>INN : 12345678</small>
                    </td>
                    <td>
                        <span class="status">
                            Access
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        <strong class="Document">Test</strong><br/>
                        <small class="me-3">Created Date: 05.12.2024 </small>
                        <small>Updated Date: 05.12.2024</small>
                    </td>
                    <td>Contract : 05.12.2024</td>
                    <td>Price : 100 000</td>
                    <td>
                        <strong class="Company">Uz Telecom</strong><br/>
                        <small>INN : 12345678</small>
                    </td>
                    <td>
                        <span class="status">
                            InProgress
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        <strong class="Document">Test</strong><br/>
                        <small class="me-3">Created Date: 05.12.2024 </small>
                        <small>Updated Date: 05.12.2024</small>
                    </td>
                    <td>Contract : 05.12.2024</td>
                    <td>Price : 100 000</td>
                    <td>
                        <strong class="Company">Uz Telecom</strong><br/>
                        <small>INN : 12345678</small>
                    </td>
                    <td>
                        <span class="status">
                            Progress
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
    .Document {
        color : blue;
    }
    .Company {
        color: blue;
    }
    .status {
        display: inline-block;
        padding: 5px 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
    }

    .status:hover {
        background-color: #0056b3;
    }
</style>