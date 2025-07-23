import { Play } from "phosphor-react";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export default function HomePage() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">I'm going to work on</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Project name"
          />

          <datalist id="task-suggestions">
            <option value="Project A" />
            <option value="Project B" />
            <option value="Project C" />
          </datalist>

          <label htmlFor="duration">during</label>
          <MinutesAmountInput
            type="number"
            id="duration"
            placeholder="00"
            step={5}
            max={60}
            min={0}
          />

          <span>minutes.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
