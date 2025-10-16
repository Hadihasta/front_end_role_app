import React from 'react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import axios from '@/lib/axios'

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

interface FormFieldProps {
  onAddRole: (role: string) => void
}

const sendFormData = async (role: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/role`, { role_name: role })
    console.log('Response:', res.data)
  } catch (error) {
    console.log(error)
  }
}

const FormField = ({ onAddRole }: FormFieldProps) => {
  const [role, setRole] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // prevent page reload
    sendFormData(role)
    onAddRole(role)
    console.log('Submitted role:', role)
    setRole('') // clear the input after submit
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Add To List</FieldLegend>
            <FieldDescription>Input Role for adding to the list</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">Role</FieldLabel>
                <Input
                  id="role-input"
                  name="role"
                  placeholder="Input Role here..."
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />

          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button
              variant="outline"
              type="button"
              onClick={() => setRole('')}
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
