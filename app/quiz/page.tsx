import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BeautyQuizPage() {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Beauty Quiz</h1>
            <p className="mt-2 text-gray-600">Answer a few questions to help us find your perfect beauty matches.</p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm">
              <span>Question 2 of 8</span>
              <span>25% Complete</span>
            </div>
            <Progress value={25} className="mt-2" />
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-bold text-gray-900">What is your skin type?</h2>
            <p className="mt-2 text-gray-600">Select the option that best describes your skin most days.</p>

            <div className="mt-6">
              <RadioGroup defaultValue="combination">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-2 p-4 border rounded-md">
                    <RadioGroupItem value="dry" id="skin-dry" />
                    <Label htmlFor="skin-dry" className="flex flex-col">
                      <span className="font-medium">Dry</span>
                      <span className="text-sm text-gray-500">Feels tight, flaky, or rough</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-md">
                    <RadioGroupItem value="oily" id="skin-oily" />
                    <Label htmlFor="skin-oily" className="flex flex-col">
                      <span className="font-medium">Oily</span>
                      <span className="text-sm text-gray-500">Shiny, especially in T-zone</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-md border-pink-600 bg-pink-50">
                    <RadioGroupItem value="combination" id="skin-combination" />
                    <Label htmlFor="skin-combination" className="flex flex-col">
                      <span className="font-medium">Combination</span>
                      <span className="text-sm text-gray-500">Oily T-zone, dry cheeks</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-md">
                    <RadioGroupItem value="normal" id="skin-normal" />
                    <Label htmlFor="skin-normal" className="flex flex-col">
                      <span className="font-medium">Normal</span>
                      <span className="text-sm text-gray-500">Balanced, not too dry or oily</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-md">
                    <RadioGroupItem value="sensitive" id="skin-sensitive" />
                    <Label htmlFor="skin-sensitive" className="flex flex-col">
                      <span className="font-medium">Sensitive</span>
                      <span className="text-sm text-gray-500">Easily irritated or reactive</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-md">
                    <RadioGroupItem value="not-sure" id="skin-not-sure" />
                    <Label htmlFor="skin-not-sure" className="flex flex-col">
                      <span className="font-medium">Not Sure</span>
                      <span className="text-sm text-gray-500">I'm not certain of my skin type</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-bold text-gray-900">What are your skin concerns?</h2>
            <p className="mt-2 text-gray-600">Select all that apply.</p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { id: "acne", label: "Acne & Breakouts" },
                { id: "aging", label: "Fine Lines & Wrinkles" },
                { id: "dark-spots", label: "Dark Spots & Hyperpigmentation", checked: true },
                { id: "redness", label: "Redness & Inflammation" },
                { id: "dullness", label: "Dullness & Uneven Tone", checked: true },
                { id: "pores", label: "Enlarged Pores" },
                { id: "dryness", label: "Dryness & Flakiness" },
                { id: "oiliness", label: "Excess Oil & Shine" },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center space-x-2 p-4 border rounded-md ${item.checked ? "border-pink-600 bg-pink-50" : ""}`}
                >
                  <Checkbox id={item.id} defaultChecked={item.checked} />
                  <Label htmlFor={item.id}>{item.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Prefer to use our face scanning technology?{" "}
              <Link href="/scan" className="text-pink-600 hover:text-pink-700 font-medium">
                Try AI Face Scan
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
