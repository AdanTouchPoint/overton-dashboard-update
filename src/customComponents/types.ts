import React from 'react';
import { SanitizedCollectionConfig } from 'payload/dist/collections/config/types';
import { CollectionPermission } from 'payload/dist/auth/types';
import { Document } from 'payload/dist/types';
import { Fields } from 'payload/dist/admin/components/forms/Form/types';

export type IndexProps = {
  collection: SanitizedCollectionConfig
  isEditing?: boolean
}

export type Props = IndexProps & {
  data: Document
  onSave?: (json: Record<string, unknown> & {
    doc: Record<string, any>
    message: string
    collectionConfig: SanitizedCollectionConfig
    operation: 'create' | 'update',
  }) => void
  id?: string
  permissions: CollectionPermission
  isLoading: boolean
  internalState?: Fields
  apiURL: string
  action: string
  hasSavePermission: boolean
  autosaveEnabled: boolean
  disableEyebrow?: boolean
  disableActions?: boolean
  disableLeaveWithoutSaving?: boolean
  customHeader?: React.ReactNode
  updatedAt?: string
}

export type HideElements = boolean