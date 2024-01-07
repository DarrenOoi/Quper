interface MetricsProps {
  metrics: Record<string, number>;
}

function MetricsTable({ metrics }: MetricsProps) {
  return (
    <div>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
            {/* <th>Description</th> */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(metrics).map(([metric, value]) => (
            <tr key={metric}>
              <td>
                <div>
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
                  </div>
                </div>
              </td>
              <td>
                <div
                  className='lg:tooltip tooltip-top'
                  data-tip='An ARI score of 24.45 indicates an extremely high level of text complexity, suitable for advanced readers, often found in academic and technical content.'
                >
                  {value}
                </div>
                <br />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MetricsTable;
