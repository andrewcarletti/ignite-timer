import { HistoryContainer, HistoryList, StatusIndicator } from "./styles";

export default function HistoryPage() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start at</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Example Task</td>
              <td>25 minutes</td>
              <td>10:00 AM</td>
              <td>
                <StatusIndicator status="completed">Completed</StatusIndicator>
              </td>
            </tr>
            <tr>
              <td>Another Task</td>
              <td>30 minutes</td>
              <td>11:00 AM</td>
              <td>
                <StatusIndicator status="in-progress">
                  In Progress
                </StatusIndicator>
              </td>
            </tr>
            <tr>
              <td>First Task</td>
              <td>15 minutes</td>
              <td>10:00 AM</td>
              <td>
                <StatusIndicator status="cancelled">Cancelled</StatusIndicator>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
