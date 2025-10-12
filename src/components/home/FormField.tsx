import React from 'react'
import { Button } from '@/components/ui/button'

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const FormField = () => {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Add To List</FieldLegend>
            <FieldDescription>Input Role for adding to the list</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">Role</FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Input Role here..."
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          {/* <FieldSeparator /> */}

          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default FormField
