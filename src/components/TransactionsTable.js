import React from 'react';

const TransactionsTable = ({ data, page, setPage }) => {
  return (
    <div className="mt-4">
      <table className="table table-striped">
        <thead>
          <tr style={{fontSize: '15px'}}>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date of Sale</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data?.transactions?.map((txn) => (
            <tr key={txn._id}>
              <td>{txn.title}</td>
              <td style={{width: '30%'}}>{txn.description.slice(0, 80)+"..."}</td>
              <td>${txn.price}</td>
              <td>{txn.category}</td>
              <td style={{width: '10%'}}>{new Date(txn.dateOfSale).toLocaleDateString()}</td>
              <td>{txn.sold ? 'Yes' : 'No'}</td>
              <td><img src={txn.image} alt="" style={{width: '80px', aspectRatio: '1/1', objectFit: 'contain'}} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-between align-items-baseline gap-3">
        <button
          className="btn btn-secondary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <p>Page No: {data.page}</p>
        </div>
        <div className="d-flex justify-content-between align-items-baseline gap-3">
        <p>Per Page: {data.perPage}</p>
        <button
          className="btn btn-secondary"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
