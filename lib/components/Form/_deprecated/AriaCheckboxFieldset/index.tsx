'use client'
import { useFormContext } from "react-hook-form"
import { CheckboxGroup, Label, Checkbox } from "react-aria-components"

type Props = {

}

export function AriaCheckboxFieldset({
  ...rest
}: Props) {
  const { register, formState: { errors } } = useFormContext()
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">
        {/* <div className="checkbox" aria-hidden="true">
          <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
        </div> */}
        Soccer
      </Checkbox>
      <Checkbox value="baseball">
        {/* <div className="checkbox" aria-hidden="true">
          <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
        </div> */}
        Baseball
      </Checkbox>
      <Checkbox value="basketball">
        {/* <div className="checkbox" aria-hidden="true">
          <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
        </div> */}
        Basketball
      </Checkbox>
    </CheckboxGroup>

  );
}
