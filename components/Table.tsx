interface MetricsProps {
  metrics: Record<string, number>;
}

function MetricsTable({ metrics }: MetricsProps) {
  const descriptions: Record<string, string> = {
    ARI: 'ARI 1-3: Very easy. \nARI 4-6: Easy.\nARI 7-9: Fairly easy.\nARI 10-12: Standard.\nARI 13-15: Fairly difficult.\nARI 16-18: Difficult.\nARI 19 and above: Very difficult.',
    FRES: '90-100: Very easy. 80-89: Easy. 70-79: Fairly easy. 60-69: Standard. 0-59: Difficult.',
    LIX: '0-29 : Very easy. 30-39 : Easy. 40-49 : A little difficult. 50-59 : Difficult. >60 : Very difficult.',
  };
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
                    <div className='font-bold'>
                      <div
                        className='tooltip tooltip-top'
                        data-tip={descriptions[metric]}
                      >
                        {metric}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {value}
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
