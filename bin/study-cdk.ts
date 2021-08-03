#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { StudyCdkStack } from '../lib/study-cdk-stack';

const app = new cdk.App();
new StudyCdkStack(app, 'StudyCdkStack');
