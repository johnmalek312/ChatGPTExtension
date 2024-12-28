from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PinBase(BaseModel):
    message_id: str
    chat_id: str
    content: str
    user_id: str

class PinCreate(PinBase):
    pass

class Pin(PinBase):
    id: str
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True 