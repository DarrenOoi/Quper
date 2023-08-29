interface MetricsProps {
  metrics: Record<string, number>;
}

function MetricsTable({ metrics }: MetricsProps) {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(metrics).map(([metric, value]) => (
            <tr key={metric}>
              <td>
                <div className='flex items-center space-x-3'>
                  {/* <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/tailwind-css-component-profile-2@56w.png'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div> */}
                  <div>
                    <div className='font-bold'>{metric}</div>
                    {/* <div className='text-sm opacity-50'>United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                {value}
                <br />
                {/* <span className='badge badge-ghost badge-sm'>
                  Desktop Support Technician
                </span> */}
              </td>
              {/* <td>
                A linguistic metric that calculates the average number of
                syllables contained within each word.
              </td> */}
              <th>
                <button className='btn btn-ghost btn-xs'>details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MetricsTable;
