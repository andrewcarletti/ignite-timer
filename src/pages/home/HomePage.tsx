import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

const newCycleValidationSchema = z.object({
  task: z.string().min(3).max(100),
  duration: z.number().min(5).max(60),
});

type NewCycleFormData = z.infer<typeof newCycleValidationSchema>;

export default function HomePage() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: "",
      duration: 0,
    },
  });
  const task = watch("task");
  const isSubmitDisabled = !task || task.length < 3;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    console.log("New cycle created", data);

    reset();
  };

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I'm going to work on</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Project name"
            {...register("task", { required: true })}
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
            {...register("duration", {
              required: true,
              valueAsNumber: true,
              min: 5,
              max: 60,
            })}
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

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
