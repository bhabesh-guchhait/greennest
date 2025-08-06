import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button size="icon" className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
